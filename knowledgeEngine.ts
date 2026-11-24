import type { KnowledgeChunk, KnowledgeScope } from './types';
import { PHYSICS_11_CHAPTER_1_CHUNKS } from './physics11';

/**
 * Danh sách toàn bộ các hạt kiến thức của hệ thống LC Edu
 */
const ALL_KNOWLEDGE_CHUNKS: KnowledgeChunk[] = [
  ...PHYSICS_11_CHAPTER_1_CHUNKS,
];

function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

export interface FindChunksOptions {
  subject?: string;
  grade?: number;
  scope?: KnowledgeScope;
  chapter?: number;
  maxResults?: number;
}

/**
 * Tìm kiếm các hạt kiến thức phù hợp nhất với câu hỏi hoặc văn bản đầu vào.
 * Chạy 100% offline trên client/server, tiêu thụ 0 token LLM.
 */
export function findRelevantChunks(text: string, options: FindChunksOptions = {}): KnowledgeChunk[] {
  if (!text || text.trim().length === 0) return [];

  const rawLower = text.toLowerCase();
  const rawNoTone = removeVietnameseTones(text);
  const maxResults = options.maxResults || 2;

  let candidateChunks = ALL_KNOWLEDGE_CHUNKS;

  if (options.subject) {
    const subjNorm = options.subject.toLowerCase();
    candidateChunks = candidateChunks.filter(c => 
      c.subject.toLowerCase() === subjNorm || 
      ((subjNorm.includes('lí') || subjNorm.includes('li') || subjNorm.includes('vật')) && c.subject === 'vat_li')
    );
  }

  if (options.grade) {
    candidateChunks = candidateChunks.filter(c => c.grade === options.grade);
  }

  if (options.scope) {
    candidateChunks = candidateChunks.filter(c => c.scope === options.scope);
  }

  if (options.chapter) {
    candidateChunks = candidateChunks.filter(c => c.chapter?.number === options.chapter);
  }

  const scoredChunks = candidateChunks.map(chunk => {
    let score = 0;

    for (const kw of chunk.keywords) {
      const kwLower = kw.toLowerCase();
      const kwNoTone = removeVietnameseTones(kw);

      if (rawLower.includes(kwLower)) {
        score += kwLower.split(' ').length * 3;
      } else if (rawNoTone.includes(kwNoTone)) {
        score += kwNoTone.split(' ').length * 1.5;
      }
    }

    if (chunk.lesson?.title && rawLower.includes(chunk.lesson.title.toLowerCase())) {
      score += 5;
    }

    return { chunk, score };
  });

  return scoredChunks
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.chunk);
}

/**
 * Định dạng các hạt kiến thức thành văn bản súc tích (~200 - 350 token) tiêm vào Prompt của AI
 */
export function formatChunksForAiPrompt(chunks: KnowledgeChunk[]): string {
  if (!chunks || chunks.length === 0) return '';

  return chunks.map((c, index) => {
    const lines: string[] = [];
    const scopeLabel = c.scopeTitle ? ` [Phạm vi: ${c.scopeTitle}]` : '';
    const gradeLabel = c.grade ? ` Lớp ${c.grade}` : '';
    const chapterLabel = c.chapter ? ` - Chương ${c.chapter.number || ''}: ${c.chapter.title}` : '';
    const lessonLabel = c.lesson ? ` - Bài ${c.lesson.number || ''}: ${c.lesson.title}` : '';

    lines.push(`--- [KIẾN THỨC CHUẨN #${index + 1}: Môn ${c.subjectTitle || c.subject.toUpperCase()}${gradeLabel}${scopeLabel}${chapterLabel}${lessonLabel}] ---`);
    lines.push(`Tóm lược cốt lõi:\n${c.summary}`);
    
    if (c.concepts.length > 0) {
      lines.push('Khái niệm & Định nghĩa cốt lõi:');
      c.concepts.forEach(cp => {
        lines.push(`+ ${cp.term}: ${cp.definition}`);
        if (cp.commonMisconceptions && cp.commonMisconceptions.length > 0) {
          lines.push(`  * Hiểu lầm cần tránh: ${cp.commonMisconceptions.join('; ')}`);
        }
      });
    }

    if (c.formulas && c.formulas.length > 0) {
      lines.push('Công thức & Điều kiện áp dụng:');
      c.formulas.forEach(fm => {
        lines.push(`+ ${fm.latex} (${fm.name || fm.description}${fm.conditions ? `, Điều kiện: ${fm.conditions}` : ''})`);
      });
    }

    if (c.rules) {
      if (c.rules.conventions && c.rules.conventions.length > 0) {
        lines.push(`Quy chuẩn: ${c.rules.conventions.join(' | ')}`);
      }
      if (c.rules.outOfScope && c.rules.outOfScope.length > 0) {
        lines.push(`Ngoài phạm vi / Không bắt buộc: ${c.rules.outOfScope.join(' | ')}`);
      }
    }

    if (c.sourceRef?.origin) {
      lines.push(`Nguồn tra cứu: ${c.sourceRef.origin}`);
    }

    return lines.join('\n');
  }).join('\n\n');
}

export * from './types';
export * from './physics11';
