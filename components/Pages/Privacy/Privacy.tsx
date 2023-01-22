import H1 from "../../Heading/H1";
import Link from "next/link";

const CookieConsent = () => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("remember that I accept");
  };
};

export default function Privacy() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-56">
      <H1 className="text-3xl font-bold font-open">
        Website privacy policy page content
      </H1>

      <section>
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quam
          accusamus dolore sapiente, itaque neque quas asperiores veritatis, et
          cumque error sint tempore. Rem molestias harum voluptates magnam,
          fugiat ratione? Minima unde et assumenda in harum aspernatur dolorum
          facilis repellendus suscipit atque animi hic, eligendi neque, soluta
          quia, omnis ad similique accusantium a consequuntur? Natus amet ipsam
          repellat ex velit. Doloribus velit incidunt, tempore obcaecati ducimus
          ex quibusdam fugiat esse ratione deleniti, ipsa dignissimos pariatur
          eaque qui! Facere ratione eos facilis ea voluptas adipisci a
          voluptatibus, quidem consectetur voluptatem nobis! Est, ipsam. Enim
          voluptatem maxime placeat cum? Reiciendis alias numquam assumenda? Sed
          molestiae eius autem aliquam quidem eligendi pariatur fugiat excepturi
          possimus? Inventore illo quibusdam a praesentium molestias et.
          Repellendus. Quae sint placeat ad itaque quia, sequi esse voluptates
          fugiat quos similique, quis, distinctio aspernatur accusantium. Ipsa
          nemo nisi voluptatem soluta labore provident sunt neque magni. Odio
          numquam nostrum fuga? Hic praesentium voluptatibus cumque iusto?
          Maiores neque a labore. Commodi corrupti earum vero, repellendus
          dolorum voluptate aut error perspiciatis molestias reiciendis? Beatae
          iusto, commodi in delectus placeat earum est quia! Officiis fugit
          provident non repellendus ipsum numquam sapiente maiores adipisci
          similique rem a accusantium delectus eligendi nostrum error autem
          consequatur, praesentium velit temporibus iste nam id corporis.
          Aliquam, aliquid distinctio. Ea omnis, vero nam tempore quia
          aspernatur amet, excepturi perspiciatis neque explicabo delectus,
          voluptates inventore praesentium nesciunt quasi eos expedita quos
          tenetur assumenda reiciendis corporis nulla debitis. A, architecto
          enim. Aut, harum vitae aperiam cupiditate blanditiis non eum!
          Excepturi laudantium fugit omnis temporibus quaerat possimus beatae,
          minus delectus facere velit rerum ab, adipisci vitae, nobis corrupti
          similique deserunt eligendi dicta. Sit assumenda beatae ducimus rerum.
          Aliquid laboriosam possimus facere. At perspiciatis accusantium
          ratione, sunt optio earum voluptatibus aspernatur, nemo consequatur
          reiciendis corrupti ducimus eligendi nisi rerum quibusdam quia libero
          inventore?
        </p>
      </section>
    </main>
  );
}
