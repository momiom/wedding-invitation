import Layout from '@/components/layout/Layout';
import CelebrationDate from '@/components/uiGroup/CelebrationDate';
import EyeCatch from '@/components/uiGroup/EyeCatch';
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
        <CelebrationDate />
        <div className="p-8 map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.693598557131!2d139.71087705174332!3d35.65991998010204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc5cdf417c7%3A0x8913224d4475c58d!2z44Ki44O844Oi44OL44O8IOOCouOCsOODrOOCouODvOODluODqy9IYXJtb25pZSBhZ3JlYWJsZQ!5e0!3m2!1sja!2sjp!4v1655051152267!5m2!1sja!2sjp"
            width="600"
            height="300"
            className="border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="relative top-[-130px] w-full bg-primary-green border-t-2 border-off-white/50">
        <InvitationForm />
      </section>
    </Layout>
  );
};

export default Home;
