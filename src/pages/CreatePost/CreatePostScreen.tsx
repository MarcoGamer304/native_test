import ScreenBorder from "../../components/ScreenBorders";
import CreatePost from "./components/CreatePost";

export default function CreatePostScreen() {
  return (
    <ScreenBorder header={false} searchBar={false}>
      <CreatePost />
    </ScreenBorder>
  );
}
