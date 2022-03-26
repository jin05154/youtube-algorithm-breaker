export default function ItemContainerMobile({ video }) {
  const onClickContainer = () =>
    window.open(`https://youtu.be/${video.url}`, "_blank");
  return (
    <>
      <div className="item-container" onClick={onClickContainer}>
        <div className="img-wrapper">
          <img
            src={`http://img.youtube.com/vi/${video.url}/hqdefault.jpg`}
            alt="영상 불러오기 실패"
          />
          <div>{video.playtime}</div>
        </div>
        <div className="vid-info-wrapper">
          <div className="vid-info-avatar">
            <img src={video.channel_art} alt={video.channel_name} />
          </div>
          <div className="vid-infos">
            <h3>{video.video_title}</h3>
            <p>{video.channel_name}</p>
            <p>{video.publish_date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
