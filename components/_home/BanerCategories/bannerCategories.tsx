import { Button } from "@/components/ui/button"
import { BBox } from "./style"



export function BannerCategories() {

    return (
        <BBox>
            <div className="textMain">
                <h2>Categories</h2>
                <h1>Enhance Your </h1> 
                <h1>Music Experiencie</h1>
                <div className="badges">
                    <div><p className="number">23</p><p className="time">hours</p></div>
                    <div><p className="number">05</p><p className="time">Days</p></div>
                    <div><p className="number">59</p><p className="time">Minutes</p></div>
                    <div><p className="number">35</p><p className="time">seconds</p></div>
                    
                </div>
                <Button> Buy Now</Button>
            </div>
            <div className="imgBox">
                <img src="/7e210f637fc0504b7d93cd207df744c2.png" alt="" />
            </div>
        </BBox>
    )
}