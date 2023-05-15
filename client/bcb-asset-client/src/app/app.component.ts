import { Component, OnInit } from '@angular/core';
import { Asset } from './domain/asset';
import { AssetsService } from './assets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bcb-asset-client';
  assetDialog: boolean = false;
  asset: Asset = {};
  assets: Asset[] = [];
  submitted: boolean = false;

  constructor(private assetsService: AssetsService) {

  }

 ngOnInit(){
  this.assetsService.getAllAssets().subscribe((res:any) => {
    this.assets = res
  })
 }
  openNew() {
    this.assetDialog = true
    this.submitted= false
  }
  hideDialog() {
    this.assetDialog = false;
    this.submitted = false;
 }
 saveAsset() {
  this.submitted = true;
  const obj = {
    name: this.asset.name?.trim(),
    symbol: this.asset.symbol?.trim()
  }
  this.assetsService.addAsset(obj).subscribe((res:any) => {
    console.log('save asset', res)
    this.assets = res
    this.assetDialog= false
  })
 }
}
