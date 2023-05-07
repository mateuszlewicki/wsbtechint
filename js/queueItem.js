export class QueueItem {
    constructor(image, title, artist, songURL) {
      this.image = image;
      this.title = title;
      this.artist = artist;
      this.songURL = songURL;
    }
    fragment() {
        let fragment = new DocumentFragment();
        
        let mainContainer = document.createElement("div");
        mainContainer.classList.add("next-media", "w-90", "grid", "grid-2-2","mb-15");

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("icon", "grid-cs-1", "grid-ce-2", "grid-rs-1", "grid-re-3")

        let image = document.createElement("img");
        image.src = this.image;
        imageContainer.appendChild(image);


        let titleContainer = document.createElement("div");
        titleContainer.classList.add("title", "grid-cs-2", "grid-ce-3", "grid-rs-1", "grid-re-2")

        let title = document.createElement("p");
        title.textContent = this.title;
        titleContainer.appendChild(title);

        let artistContainer = document.createElement("div");
        artistContainer.classList.add("artist", "grid-cs-2", "grid-ce-3", "grid-rs-2", "grid-re-3")

        let artist = document.createElement("p");
        artist.textContent = this.artist;
        artistContainer.appendChild(artist);

        let filepath = document.createElement("p");
        filepath.classList.add("none","filepath");
        filepath.textContent = this.songURL;

        mainContainer.append(imageContainer);
        mainContainer.append(titleContainer);
        mainContainer.append(artistContainer);
        mainContainer.append(filepath);
        mainContainer.addEventListener("click",this.onClick,false)

        fragment.appendChild(mainContainer);

        return fragment;

      }

      onClick(event) {
        let previewImage = document.querySelector("div#preview>img");
        let previewTitle = document.querySelector("div#title>p");
        let previewArtist =  document.querySelector("div#artist>p");
        let player =  document.querySelector("#player>source");
        let active = document.querySelector("div#queue > ul > li > div.active")

        
        previewImage.src=this.querySelector(".icon > img").src;
        previewTitle.textContent = this.querySelector(".title > p").textContent;
        previewArtist.textContent = this.querySelector(".artist > p").textContent;
        player.src = this.querySelector("p.filepath").textContent;
        try {
            active.classList.remove("active");
        }
        catch (e) {}
        this.classList.add("active");
      }

    }
  
  