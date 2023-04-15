import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  let content = null;
  if (isLoading)
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  if (!isLoading && isError)
    content = <Error message="There was an error ocurren" />;
  if (!isLoading && !isError && videos?.length === 0)
    content = <Error message="video no found!" />;
  if (!isLoading && !isError && videos?.length > 0)
    content = videos?.map((video) => <Video key={video.id} video={video} />);
  return content;
}
