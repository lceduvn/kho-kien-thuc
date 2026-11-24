import type { KnowledgeChunk } from '../types';
import { CHUNK_VL11_C1_MO_TA_DAO_DONG } from './c1_mo_ta_dao_dong';
import { CHUNK_VL11_C1_VAN_TOC_GIA_TOC } from './c1_van_toc_gia_toc';
import { CHUNK_VL11_C1_NANG_LUONG } from './c1_nang_luong';
import { CHUNK_VL11_C1_CON_LAC_LO_XO, CHUNK_VL11_C1_CON_LAC_DON } from './c1_con_lac';
import { CHUNK_VL11_C1_DAO_DONG_TAT_DAN, CHUNK_VL11_C1_CUONG_BUC_CONG_HUONG } from './c1_tat_dan_cuong_buc';

export const PHYSICS_11_CHAPTER_1_CHUNKS: KnowledgeChunk[] = [
  CHUNK_VL11_C1_MO_TA_DAO_DONG,
  CHUNK_VL11_C1_VAN_TOC_GIA_TOC,
  CHUNK_VL11_C1_NANG_LUONG,
  CHUNK_VL11_C1_CON_LAC_LO_XO,
  CHUNK_VL11_C1_CON_LAC_DON,
  CHUNK_VL11_C1_DAO_DONG_TAT_DAN,
  CHUNK_VL11_C1_CUONG_BUC_CONG_HUONG,
];

export * from './c1_mo_ta_dao_dong';
export * from './c1_van_toc_gia_toc';
export * from './c1_nang_luong';
export * from './c1_con_lac';
export * from './c1_tat_dan_cuong_buc';
