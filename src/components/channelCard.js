import "./channelCard.css";
import { formatString, stringSeparator } from "../utils/functions";

export const channelCard = (parentElement, data) => {
  const {
    title,
    thumbnails,
    statistics: { subscriberCount, videoCount, viewCount },
  } = data;

  let card = ` <div class="card"
  data-title="${title}" 
  data-subscribers="${formatString(subscriberCount)}"
  data-videos="${formatString(videoCount)}"
  data-views="${formatString(viewCount)}"
  >
                            <img class="card-img"
                                srcset="${thumbnails.medium.url} ${thumbnails.medium.width}w,
                                        ${thumbnails.default.url} ${thumbnails.default.width}w"
                                src=${thumbnails.default.url} alt="Logo ${title}"
                            />
                            <p class="card-title">${title}</p>
                            <div class="card-stats-wrapper">
                                <div class="card-stats">
                                    <p class="card-stats-title">SUBSCRIBERS</p>
                                    <p class="card-stats-number">${stringSeparator(subscriberCount)}</p>
                                </div>
                                <div class="card-stats">
                                    <p class="card-stats-title">VIDEOS</p>
                                    <p class="card-stats-number">${stringSeparator(videoCount)}</p>
                                </div>
                                <div class="card-stat">
                                    <p class="card-stats-title">VIEWS</p>
                                    <p class="card-stats-number">${stringSeparator(viewCount)}</p>
                                </div>
                            </div>
                        </div>
                    `;

  parentElement.insertAdjacentHTML("beforeend", card);
};
