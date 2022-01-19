// @TODO: nazwa pliku jest status.ts. Taka nazwa jest zarezerwowana z reguły dla interfejsów. Uważałbym na konwencje nqzewnicze
//  Gdy tworzysz enuma pamiętaj aby nazwa pliku wyglądała w następujący sposób => nazwa-enuma.enum.ts czyli w naszym przypadku house-status.enum.ts

export enum HouseStatus {
  FOR_SALE = 'Na sprzedaż',
  SOLD = 'Sprzedany',
  FOR_RENT = 'Na wynajem',
  RESERVED = 'Zarezerwowany',
  RENTED = 'Wynajęty'
}

// @TODO: Ogólnie zapis ten co zastosowałeś jest ok, natomiast często spotkasz się z zapisem, który przypisuje wartość do poszczególnych elementów.

// export enum Status {
//   FOR_SALE = 'FOR_SALE',
//   SOLD = 'SOLD',
//   FOR_RENT = 'FOR_RENT',
//   RESERVED = 'RESERVED',
//   RENTED = 'RENTED'
// }

