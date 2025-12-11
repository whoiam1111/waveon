import React from "react";

export default function TermsPage() {
	return (
		<main className="w-full min-h-screen bg-slate-950 text-slate-300 pt-32 pb-20">
			<div className="container mx-auto px-6 max-w-4xl">
				<h1 className="text-3xl md:text-4xl font-bold text-white mb-12">
					이용약관
				</h1>

				<div className="space-y-8 legal-content">
					<section>
						<h2 className="text-xl font-bold text-white mb-4">제1조 (목적)</h2>
						<p className="leading-relaxed">
							본 약관은 WAVEON(이하 '회사')이 제공하는 서비스의 이용조건 및
							절차, 이용자와 회사의 권리(이하 '서비스')와 의무, 책임사항을
							규정함을 목적으로 합니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제2조 (약관의 효력 및 변경)
						</h2>
						<p className="leading-relaxed">
							① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게
							공지함으로써 효력이 발생합니다.
							<br />② 회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지
							않는 범위 내에서 본 약관을 개정할 수 있습니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제3조 (이용자의 의무)
						</h2>
						<p className="leading-relaxed">
							이용자는 서비스를 이용할 때 다음 각 호의 행위를 하여서는 아니
							됩니다.
						</p>
						<ul className="list-disc pl-5 space-y-2 mt-2">
							<li>부당한 방법으로 서비스의 안정적인 운영을 방해하는 행위</li>
							<li>다른 이용자의 정보를 도용하거나 부정하게 사용하는 행위</li>
							<li>기타 관계법령에 위배되는 행위</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제4조 (서비스의 제공 및 중단)
						</h2>
						<p className="leading-relaxed">
							① 회사는 이용자에게 안정적인 서비스를 제공하기 위해 노력합니다.
							<br />② 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장,
							통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로
							중단할 수 있습니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제5조 (저작권의 귀속 및 이용제한)
						</h2>
						<p className="leading-relaxed">
							① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에
							귀속합니다.
							<br />② 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전
							승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여
							영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제6조 (책임의 한계)
						</h2>
						<p className="leading-relaxed">
							회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
							제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제7조 (관할법원)
						</h2>
						<p className="leading-relaxed">
							서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 회사의 본사
							소재지를 관할하는 법원을 전속 관할법원으로 합니다.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
