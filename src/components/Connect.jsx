import logo from '../../public/logo-nav.png';
import { socialNetworks } from "../data";


export default function Connect() {
  return (
    <section className="bg-primaryColor-light py-[50px] lg:py-[75px] overflow-x-auto">
      <div className="wrapper">
        <div className="flex items-center justify-between gap-6 whitespace-nowrap">
          
          {/* Logo + Text Row */}
          <div className="flex items-center gap-4 shrink-0">
            <img src="/logo-nav.png" alt="Logo" width={48} height={48} />
            <h2 className="text-lg">
              <span className="text-primaryColor font-bold">Stay</span> connected
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 shrink-0">
            {socialNetworks.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img width={32} height={32} src={item.icon} alt="" />
                <a target="_blank" href={item.link}>{item.username}</a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
