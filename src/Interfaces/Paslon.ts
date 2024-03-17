export interface Paslon {
  id: number;
  nomorUrut: number;
  namaPaslon: string;
  visiMisi: string[];
  partai: { id: number; namaPartai: string }[];
}
