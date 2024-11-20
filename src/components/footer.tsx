import { images } from "@/utils/images";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

export function Footer() {
    return (
      <footer className="pt-[180px] px-20">
        <div className="flex justify-between flex-wrap gap-10">
          <div>
            <img src={images.IconLogo} alt="NFT-Bloc" />
            <h3 className="font-semibold text-lg text-white mt-20">
              Join Blocvault community
            </h3>
            <div className="flex items-center gap-6 mt-6">
              <img src={images.IconTwitter} alt="Twitter" />
              <img src={images.IconTelegram} alt="Telegram" />
              <img src={images.IconYoutube} alt="Youtube" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl text-white mb-10">Marketplace</h3>
            <div className="text-lg text-[#637592] space-y-10 grid font-light">
              <Link to="/">Home</Link>
              <Link to="/">Explore</Link>
              <Link to="/">Activities</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl text-white mb-10">Resources</h3>
            <div className="text-lg text-[#637592] space-y-10 grid font-light">
              <Link to="/">Help Center</Link>
              <Link to="/">FAQ</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl text-white mb-10">Links</h3>
            <div className="text-lg text-[#637592] space-y-10 grid font-light">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="text-[#637592] text-lg space-y-6 pt-40 pb-10">
          <Separator />
          <p>&copy; Blocvault, Inc. All rights reserved.</p>
        </div>
      </footer>
    );
}