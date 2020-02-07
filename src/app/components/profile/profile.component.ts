import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { LocalstorageService } from "src/app/services/local-storage/localstorage.service";
import { ProfileDto } from "src/app/models/profile.model";
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  profile: ProfileDto;
  angForm: FormGroup;
  @ViewChild(AvatarComponent, { static: false })
  avatarComponent;

  constructor(
    private builder: FormBuilder,
    private localstorageService: LocalstorageService,
    private _changeDetectionRef: ChangeDetectorRef
  ) {
    this.profile = <ProfileDto>(<unknown>{
      user: "",
      avatar: "",
      email: "",
      gender: "",
      bio: ""
    });
    try {
      let dataStorage = JSON.parse(this.localstorageService.get("profile"));
      if (dataStorage) {
        this.profile = <ProfileDto>(<unknown>{
          user: dataStorage.user ? dataStorage.user : "",
          avatar: dataStorage.avatar ? dataStorage.avatar : "",
          email: dataStorage.email ? dataStorage.email : "",
          gender: dataStorage.gender ? dataStorage.gender : "",
          bio: dataStorage.bio ? dataStorage.bio : ""
        });
      }
    } catch (error) {
      console.log(error);
    }

    this.angForm = this.builder.group({
      user: [this.profile.user, Validators.required],
      email: [
        this.profile.email,
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
        ]
      ],
      gender: [this.profile.gender],
      bio: [this.profile.bio]
    });
  }

  ngOnInit() {}

  get userEmail() {
    return this.angForm.get("email");
  }

  saveProfile() {
    if (this.angForm.get("email") && this.angForm.get("user")) {
      let profileImage = this.avatarComponent.previewUrl;
      this.profile = <ProfileDto>(<unknown>{
        user: this.angForm.get("user").value,
        avatar: profileImage,
        email: this.angForm.get("email").value,
        gender: this.angForm.get("gender").value,
        bio: this.angForm.get("bio").value
      });
    }

    this.localstorageService.set("profile", JSON.stringify(this.profile));
    this._changeDetectionRef.detectChanges();
  }
}
