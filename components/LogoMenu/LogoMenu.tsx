import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/icon.png';
export default function LogoMenu() {
  return (
    <Link href="#" className="m-1.5 p-1.5">
      <Image
        className="w-auto h-10"
        src={Logo}
        width={80}
        height={80}
        alt="mm fonts collection logo"
        sizes="100vw"
        placeholder="blur"
      />
    </Link>
  );
}
