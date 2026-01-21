function VideoCard({ video, title }) {
  return (
    <div className="col-md-4 mb-4">
      <video controls className="w-100 rounded shadow">
        <source src={video} type="video/mp4" />
      </video>

      <h5 className="text-center mt-2">{title}</h5>
    </div>
  )
}

export default VideoCard
