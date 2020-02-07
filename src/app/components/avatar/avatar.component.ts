import { Component, OnInit, Input } from "@angular/core";
import { LocalstorageService } from 'src/app/services/local-storage/localstorage.service';

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"]
})
export class AvatarComponent implements OnInit {
  fileData: File = null;
  @Input() previewUrl: any = "assets/images/default.png";

  constructor(
    private localstorageService: LocalstorageService) {}

  ngOnInit() {
    let dataStorage = JSON.parse(this.localstorageService.get("profile"));
    if (dataStorage) {
      this.previewUrl = dataStorage.avatar;
    }
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }
}
