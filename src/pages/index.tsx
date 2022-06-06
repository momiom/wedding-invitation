import Layout from '@/components/layout/Layout';
import EyeCatch from '@/components/uiGroup/EyeCatch';
// import InvitationForm from '@/components/uiGroup/invitationForm';
import InvitationForm from '@/components/uiGroup/invitationForm/index';
import Message from '@/components/uiGroup/Message';
import MoveTitle from '@/components/uiGroup/MoveTitle';

const Home = (): JSX.Element => {
  return (
    <Layout path="/" title="Wedding invitation" noTitleTemplate={true} isTopPage={true}>
      <section className="bg-primary">
        <EyeCatch />
        <MoveTitle />
      </section>
      <section className="relative top-[-130px] w-full max-w-xl">
        <Message />
      </section>
      <section className="relative top-[-130px] w-full bg-primary-green border-t-2 border-off-white/50">
        <InvitationForm />
      </section>
    </Layout>
  );
};

export default Home;
