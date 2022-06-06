import NextHeadSeo from 'next-head-seo';

import Footer from '@/components/uiGroup/Footer';

////////////////////////////////////////////////////////////////////////////////////////////////////
// サイトごとに設定値を変える
const APP_NAME = 'Wedding Invitation';
const APP_ROOT_URL = 'https://wedding.k12i.space'; // 末尾に `/` をつけない
const APP_DEFAULT_DESCRIPTION = '';
const APP_DEFAULT_OG_IMAGE_PATH = '/default-unreact.png';
////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
  Props について
    - `path`: [必須] そのページの相対パスを渡す。
    - `title`: [必須] そのページのタイトルを渡す。
    - `description`: そのページのメタディスクリプションを渡す。省略した場合、`APP_DEFAULT_DESCRIPTION` が使用される。
    - `ogImagePath`: そのページのOGP画像のパスを渡す。省略した場合、`APP_DEFAULT_OG_IMAGE_PATH` が使用される。
    - `noindex`: そのページを noindex する場合は `true` を渡す。
    - `noTitleTemplate`: TOP ページで `true` を渡す。それ以外のページは基本省略。タイトルの後ろに `- サイトのタイトル` をつけるかどうか条件分岐に使用。
    - `isTopPage`: TOP ページで `true` を渡す。それ以外のページは省略。OG タイプの条件分岐に使用。
    - `children`: [必須]
*/

// prop types
type LayoutProps = {
  path: string;
  title: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
  isTopPage?: boolean;
  children: React.ReactNode;
};

const Layout = ({
  path,
  title,
  description = APP_DEFAULT_DESCRIPTION,
  ogImagePath = APP_DEFAULT_OG_IMAGE_PATH,
  noindex,
  noTitleTemplate,
  isTopPage,
  children,
}: LayoutProps) => {
  // Absolute page url
  const pageUrl = APP_ROOT_URL + path;

  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <>
      <NextHeadSeo
        title={noTitleTemplate ? title : `${title} - ${APP_NAME}`}
        canonical={pageUrl}
        description={description}
        robots={noindex ? 'noindex, nofollow' : undefined}
        og={{
          title,
          description,
          url: pageUrl,
          image: ogImageUrl,
          type: isTopPage ? 'website' : 'article',
          siteName: APP_NAME,
        }}
        twitter={{
          card: 'summary_large_image',
        }}
      />

      <div className="flex flex-col gap-8 items-center min-h-screen text-secondary bg-primary">
        {/* <Header /> */}
        <main className="flex flex-col grow gap-8 items-center w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
