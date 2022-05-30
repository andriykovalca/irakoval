import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio({ portfolio, featuredMedia }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <Link href={`/portfolio/${portfolio.slug}`}>
        <a>
          <Image
            src={featuredMedia['media_details'].sizes.full['source_url']}
            width={204}
            height={240}
            alt={featuredMedia['alt_text']}
            className="card-img-top"
          />
        </a>
      </Link>
      <div className="card-body">
        <h5 className="card-title">{portfolio.title.rendered}</h5>

      </div>
    </div>
  );
}
