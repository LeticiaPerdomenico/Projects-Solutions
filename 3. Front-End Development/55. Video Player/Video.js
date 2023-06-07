function Video(props) {
    return (
      /*2*/
      <div>
        <video controls autostart autoPlay muted src={props.src}/>
      </div>
    );
};
export default Video;