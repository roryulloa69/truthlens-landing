export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 max-w-7xl mx-auto">
        <span className="text-xl font-bold tracking-tight">TruthLens</span>
        <div className="flex gap-4 items-center">
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition">Pricing</a>
          <a href="https://chrome.google.com/webstore" target="_blank" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg transition">Add to Chrome</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <div className="inline-block bg-indigo-900/40 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-6">Now in early access</div>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Detect AI content, deepfakes,<br />and misinformation before you trust it.
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          TruthLens analyzes text, images, video, and web claims in one workflow &mdash; combining AI-detection signals, deepfake screening, and fact-check references into a single credibility score.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://chrome.google.com/webstore" target="_blank" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition">Try the Extension</a>
          <a href="#how-it-works" className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition">See how it works</a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">One extension. Every signal.</h2>
          <p className="text-center text-gray-400 mb-14 max-w-xl mx-auto">Check content in place without leaving your browser. TruthLens layers multiple detection signals to give you a single, actionable verdict.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="text-3xl mb-3">&#128269;</div>
              <h3 className="font-semibold text-lg mb-2">Check content in place</h3>
              <p className="text-gray-400 text-sm">Analyze pages, posts, and media directly in your browser without copying and pasting into a separate tool.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="text-3xl mb-3">&#9889;</div>
              <h3 className="font-semibold text-lg mb-2">Cross-verify with multiple signals</h3>
              <p className="text-gray-400 text-sm">Blend provider results across AI text, image deepfake, and fact-check sources. Cache repeated checks to reduce redundant calls.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="text-3xl mb-3">&#128202;</div>
              <h3 className="font-semibold text-lg mb-2">Respond faster to viral content</h3>
              <p className="text-gray-400 text-sm">Reuse cached verdicts on duplicate inputs to improve speed. When 100 users check the same viral image, you pay for one provider call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-center text-gray-400 mb-14">Start free. Scale when you need it.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-1">Free</h3>
              <p className="text-gray-400 text-sm mb-4">For individuals getting started</p>
              <div className="text-4xl font-bold mb-6">$0<span className="text-base font-normal text-gray-400">/mo</span></div>
              <ul className="text-sm text-gray-400 space-y-2 mb-8">
                <li>50 checks/month</li>
                <li>Text &amp; image detection</li>
                <li>24h cache</li>
              </ul>
              <a href="https://chrome.google.com/webstore" className="block text-center border border-gray-700 hover:border-indigo-500 text-white py-2 rounded-lg transition">Get started</a>
            </div>
            <div className="bg-indigo-900/30 border border-indigo-500 rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">POPULAR</div>
              <h3 className="font-bold text-xl mb-1">Pro</h3>
              <p className="text-gray-400 text-sm mb-4">For researchers, journalists, and power users</p>
              <div className="text-4xl font-bold mb-6">$9<span className="text-base font-normal text-gray-400">/mo</span></div>
              <ul className="text-sm text-gray-400 space-y-2 mb-8">
                <li>500 checks/month</li>
                <li>Text, image &amp; URL detection</li>
                <li>Priority processing</li>
                <li>Detection history</li>
              </ul>
              <a href="https://chrome.google.com/webstore" className="block text-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg transition">Get Pro</a>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-1">Team</h3>
              <p className="text-gray-400 text-sm mb-4">For newsrooms and collaborative workflows</p>
              <div className="text-4xl font-bold mb-6">$29<span className="text-base font-normal text-gray-400">/mo</span></div>
              <ul className="text-sm text-gray-400 space-y-2 mb-8">
                <li>2,000 checks/month</li>
                <li>All Pro features</li>
                <li>Shared team history</li>
                <li>Video detection (sampled)</li>
              </ul>
              <a href="mailto:hello@truthlens.app" className="block text-center border border-gray-700 hover:border-indigo-500 text-white py-2 rounded-lg transition">Contact us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>&copy; {new Date().getFullYear()} TruthLens. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="mailto:hello@truthlens.app" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
