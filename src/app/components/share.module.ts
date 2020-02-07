import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MapComponent } from "./map/map.component";
import { ProfileComponent } from "./profile/profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { LocationServiceService } from "../services/location-service/location-service.service";
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material/core";
import { AvatarComponent } from "./avatar/avatar.component";
import { StorageServiceModule } from "ngx-webstorage-service";
import { LocalstorageService } from "../services/local-storage/localstorage.service";

@NgModule({
  declarations: [MapComponent, ProfileComponent, AvatarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBkkGCDJUArvQmqx76MRqDpd9oj_PxKKNU"
    }),
    StorageServiceModule
  ],
  exports: [MapComponent, ProfileComponent],
  providers: [
    LocationServiceService,
    LocalstorageService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class ShareModule {}
