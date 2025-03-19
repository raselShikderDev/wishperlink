import ForumHero from "@/components/loggedUser/forumHero";
import Forumcards from "@/components/loggedUser/froumCards";

const Forum = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-t from-slate-900 via-slate-950 to-indigo-950">
        <ForumHero />
      </div>
      <div className="text-white bg-gradient-to-b from-slate-900 to-slate-950">
        <h2 className="text-2xl md:text-3xl text-center font-semibold">Discussion Forums</h2>
        <Forumcards />
      </div>
    </div>
  );
};

export default Forum;
