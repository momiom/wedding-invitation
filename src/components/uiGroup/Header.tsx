const headerLinkList = [
  { title: 'ごあいさつ', link: '#message' },
  { title: '日時・会場', link: '#date' },
  { title: 'ご出欠', link: '#RSVP' },
];

const Header = () => {
  return (
    <header className="block sticky top-0 left-0 z-50 pt-8 pb-4 w-full bg-primary shadow-md">
      <nav>
        <ol className="flex justify-around">
          {headerLinkList.map(({ title, link }) => (
            <li
              className="overflow-hidden p-4 text-sm hover:bg-off-white/25 rounded-lg hover:shadow-md transition duration-300 ease-in-out cursor-pointer"
              key={title}
            >
              <a href={link}>{title}</a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default Header;
