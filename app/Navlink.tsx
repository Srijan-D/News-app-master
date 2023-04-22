
import Link from "next/link";
type Props = {
    category: string;
    isActive: boolean;
};
function Navlink({ category, isActive }: Props) {
    return (
        <Link href={`/news/${category}`} className="navLink">
            {category}
        </Link>
    );
}

export default Navlink;
