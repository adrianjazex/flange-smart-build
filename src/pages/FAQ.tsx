import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2 text-center">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">FAQ</p>

          <div className="space-y-8">
            {/* Question 1 */}
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Q. What is the minimum screed depth?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A. The secondary puddle flange sits 10 mm above the primary puddle flange. Both puddle flanges can be countersunk to the desired height, as long as there is screed between the membrane layers to create a proper water flow path.
              </p>
              <Separator className="mt-6" />
            </div>

            {/* Question 2 */}
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Q. Is the Under Over™ puddle flange compatible with other waste tops?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A. Yes. The system is compatible with other waste tops, provided the spigot of the waste top extends at least 15 mm into the bottom puddle flange.
              </p>
              <Separator className="mt-6" />
            </div>

            {/* Question 3 */}
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Q. Can I use the primary puddle flange without the secondary puddle flange?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A. Yes. The primary puddle flange can be used on its own in both below-screed and above-screed applications, provided installation is carried out in accordance with Australian Standards.
              </p>
              <Separator className="mt-6" />
            </div>

            {/* Question 4 */}
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Q. Doesn't under and over waterproofing trap water?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A. No. The Under Over™ puddle flange system is designed to allow water to drain through the screed layer in the event of an over-screed membrane failure, ensuring proper moisture management.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
