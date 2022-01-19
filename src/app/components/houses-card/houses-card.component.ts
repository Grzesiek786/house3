import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';
import { HouseService } from 'src/app/services/house.services';

@Component({
  selector: 'app-houses-card',
  templateUrl: './houses-card.component.html',
  styleUrls: ['./houses-card.component.scss']
})
export class HousesCardComponent implements OnInit {
  public filteredHouses: House[] = [];
  public latestReservedHouse: House;

  private houses: House[];

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houses = this.houseService.fetchHouses();
    this.filteredHouses = this.houses;
  }

  public displayAll(): void {
    this.filteredHouses = this.houses;
  }

  public displayAbove(amount: number): void {
    this.filteredHouses = this.houses.filter((house: House) => house.price >= amount)
  }

  public displayBelow(amount: number): void {
    this.filteredHouses = this.houses.filter((house: House) => house.price <= amount)
  }

  public houseReserved(reservedHouseId: string): void {
    this.latestReservedHouse = this.houses.find(
      (house: House) => house.id === reservedHouseId
    )
  }
}
