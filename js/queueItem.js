export class QueueItem {
    constructor(image, title, artist) {
      this.image = image;
      this.title = title;
      this.artist = artist;
/* 
<div class="next-media w-90 grid grid-2-2">
                            <div class="icon grid-cs-1 grid-ce-2 grid-rs-1 grid-re-3">
                                IMAGE
                            </div>
                            <div class="title grid-cs-2 grid-ce-3 grid-rs-1 grid-re-2">
                                RADIOACTIVE
                            </div>
                            <div class="artist grid-cs-2 grid-ce-3 grid-rs-2 grid-re-3">
                                Imaging Dragons
                            </div>
                        </div>

    */ }
      fragment() {
        let fragment = new DocumentFragment();
        
        let mainContainer = document.createElement("div");
        mainContainer.classList.add(["next-media", "w-90", "grid", "grid-2-2"]);

        let imageContainer = document.createElement("div");
        imageContainer.classList.add(["icon grid-cs-1", "grid-ce-2", "grid-rs-1", "grid-re-3"])

        let image = document.createElement("img");
        image.src = this.image;
        imageContainer.appendChild(image);


        let titleContainer = document.createElement("div");
        titleContainer.classList.add(["title", "grid-cs-2", "grid-ce-3", "grid-rs-1", "grid-re-2"])

        let title = document.createElement("p");
        title.textContent = this.title;
        titleContainer.appendChild(title);

        let artistContainer = document.createElement("div");
        artistContainer.classList.add(["artist", "grid-cs-2", "grid-ce-3", "grid-rs-2", "grid-re-3"])

        let artist = document.createElement("p");
        artist.textContent = this.artist;
        artistContainer.appendChild(artist);


        mainContainer.append(image);
        mainContainer.append(title);
        mainContainer.append(artist);

        fragment.appendChild(mainContainer);

      }

    }
  
  