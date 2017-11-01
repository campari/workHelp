import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService,
              private authService: AuthService) { }
  @Output() featureSelected = new EventEmitter<string>();
 

  ngOnInit() {
  }

  onSelect(feature: string){
      this.featureSelected.emit(feature);
  }

  onSave(){
    this.dataStorage.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    ); 
  }

  onFetch(){
    this.dataStorage.getRecipes();
  }

  isLogged(){
    return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logout();
  }

}
