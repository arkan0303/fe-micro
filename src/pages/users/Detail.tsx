import Navbar from "../../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer";

const Detail = () => {
  return (
    <>
      <Navbar header="PEMILU PRESIDEN DUMBWAYS.ID " voting="Voting" />
      <div className="bg-slate-300">
        <div className="w-3/4 mx-auto  p-5 bg-slate-100 ">
          <div>
            <div className="flex w-full justify-between  ">
              <div className="text-left flex gap-2">
                <a className="" href="#">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </a>
                <a href="#">Beranda</a>
              </div>
              <div className="text-center">
                <h4>BERITA HARI INI</h4>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-center mt-5">
              KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK
            </h1>
            <p className="text-center">Super Admin</p>
            <p className="text-center">Senin, 03 Jan 2023</p>
          </div>
          <div className="flex justify-center mt-5 mb-5">
            <img
              className="w-full h-96 object-cover"
              src="images/kpu.png"
              alt="kpu"
            />
          </div>
          <div>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              ullam quisquam possimus enim quibusdam cumque nihil. Explicabo,
              reiciendis non animi fugiat nostrum ullam rem repellendus
              voluptatibus molestiae perferendis, tempore molestias. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Totam id neque sequi
              expedita, quibusdam inventore laborum dolorum libero harum
              temporibus cumque nobis alias, sunt quia eos dolore, rerum
              possimus quos. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quia perspiciatis fugiat debitis est, fugit labore id totam
              distinctio quod nobis fuga doloribus eaque hic dolor tenetur.
              Magni nemo voluptatum beatae! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Natus ullam quisquam possimus enim
              quibusdam cumque nihil. Explicabo, reiciendis non animi fugiat
              nostrum ullam rem repellendus voluptatibus molestiae perferendis,
              tempore molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam id neque sequi expedita, quibusdam
              inventore laborum dolorum libero harum temporibus cumque nobis
              alias, sunt quia eos dolore, rerum possimus quos. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Quia perspiciatis
              fugiat debitis est, fugit labore id totam distinctio quod nobis
              fuga doloribus eaque hic dolor tenetur. Magni nemo voluptatum
              beatae! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Natus ullam quisquam possimus enim quibusdam cumque nihil.
              Explicabo, reiciendis non animi fugiat nostrum ullam rem
              repellendus voluptatibus molestiae perferendis, tempore molestias.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id
              neque sequi expedita, quibusdam inventore laborum dolorum libero
              harum temporibus cumque nobis alias, sunt quia eos dolore, rerum
              possimus quos. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quia perspiciatis fugiat debitis est, fugit labore id totam
              distinctio quod nobis fuga doloribus eaque hic dolor tenetur.
              Magni nemo voluptatum beatae!
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Detail;
