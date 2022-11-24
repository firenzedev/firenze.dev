import Image from "next/image"
import H4 from "../../Heading/H4"
import { FeatureType } from "./features"

interface FeatureProps {
    feature: FeatureType
}
export default function Feature({feature}: FeatureProps) {
    return <div className="shadow-md flex p-3 bg-white items-start">
        <div>
            <Image src={feature.icon} alt={feature.title} width={50} height={50} />
            
        </div>
        <div className="ml-4 pb-10">
            <H4>{feature.title}</H4>
            <p>{feature.text}</p>
        </div>
            
    </div>
}