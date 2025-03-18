import ForumHero from "@/components/loggedUser/forumHero";
import Forumcards from "@/components/loggedUser/froumCards";

const Forum = () => {
  return (
    <div className="container bg-neutral-50 mx-auto px-6 py-12">
      <div className="mb-16">
        <ForumHero />
      </div>
      <h2 className="text-2xl text-center font-semibold mb-6">
        Discussion Forum
      </h2>
      <Forumcards />
    </div>
  );
};

export default Forum;
