// pages/ProductsPage.jsx
import { useNavigate, useParams } from 'react-router';
import { portfolioCategories } from '../../data/portfolio';
import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa6';
import { IoCallSharp, IoLogoWhatsapp } from 'react-icons/io5';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdOutlineLocalPhone } from 'react-icons/md';

const ProjectsPage = () => {
  const { categoryId } = useParams();
  const category = portfolioCategories.find((cat) => cat.id === categoryId);

  return (
   <div className="p-4 sm:p-6 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
    {category.subcategories.map((item) => {
      const isVideo = typeof item.image === "string" && item.image.endsWith(".mp4");

      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative">
            {isVideo ? (
              <video
                src={item.image}
                className="w-full h-64 sm:h-64 object-cover"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 sm:h-64 object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/5" />
          </div>

          
        </a>
      );
    })}
  </div>
</div>

  );
};

export default ProjectsPage;
