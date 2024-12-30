import { Posts_card } from "../Components/Posts_card";

export const Posts = () => {


  return (
    <div className="w-full ">
      <Posts_card heading= {'Hello World!'} subheading={" This is the setup where all my work is done. It's a little messy and has a dirty keyboard but I promise I keep all the things clean 😉"}
        hashtag={"#workplace #setup #coding"} src={'https://pbs.twimg.com/media/GTv_k3PW8AIvDv0?format=jpg&name=small'}
      />
      <Posts_card heading= {'Hello World!'} subheading={" This is the setup where all my work is done. It's a little messy and has a dirty keyboard but I promise I keep all the things clean 😉"}
        hashtag={"#workplace #setup #coding"} src={'https://pbs.twimg.com/media/GTv_k3PW8AIvDv0?format=jpg&name=small'}
      />
    </div>
  );
};
