export default function ItemContainerBrowser({ video }) {
  const onClickContainer = () =>
    window.open(`https://youtu.be/${video.url}`, "_blank");
  return (
    <div className="item-container" onClick={onClickContainer}>
      <div className="img-wrapper">
        <img
          src={`http://img.youtube.com/vi/${video.url}/hqdefault.jpg`}
          alt="영상 불러오기 실패"
        />
        <div>{video.playtime}</div>
      </div>
      <div className="vid-infos">
        <h5>{video.video_title}</h5>
        <div className="channel-info">
          <div className="vid-info-avatar">
            <img src={video.channel_art} alt={video.channel_name} />
          </div>
          <p>{video.channel_name}</p>
        </div>
        <p>조회수 {video.view_count}회  &nbsp;•&nbsp; {video.publish_date}</p>
      </div>
    </div>
  );
}
