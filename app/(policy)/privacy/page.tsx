export default function PrivacyPage() {
	return (
		<main className="w-full min-h-screen bg-slate-950 text-slate-300 pt-32 pb-20">
			<div className="max-w-5xl mx-auto px-6 w-full">
				<h1 className="text-3xl md:text-4xl font-bold text-white mb-12">
					개인정보처리방침
				</h1>

				<div className="space-y-8 legal-content">
					<section>
						<h2 className="text-xl font-bold text-white mb-4">제1조 (목적)</h2>
						<p className="leading-relaxed">
							WAVEON(이하 '회사')은(는) 이용자의 개인정보를 중요시하며,
							"정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
							회사는 개인정보처리방침을 통하여 이용자가 제공하는 개인정보가
							어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
							조치가 취해지고 있는지 알려드립니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제2조 (개인정보의 수집항목 및 수집방법)
						</h2>
						<p className="leading-relaxed mb-4">
							회사는 원활한 서비스 제공을 위해 다음과 같은 개인정보를 수집하고
							있습니다.
						</p>
						<ul className="list-disc pl-5 space-y-2">
							<li>수집항목: 이름, 이메일, 연락처, 문의내용</li>
							<li>수집방법: 홈페이지(문의하기)</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제3조 (개인정보의 수집 및 이용목적)
						</h2>
						<p className="leading-relaxed">
							회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
						</p>
						<ul className="list-disc pl-5 space-y-2 mt-2">
							<li>
								서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
							</li>
							<li>회원 관리 및 불만처리 등 민원처리</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제4조 (개인정보의 보유 및 이용기간)
						</h2>
						<p className="leading-relaxed">
							원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
							지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가
							있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안
							회원정보를 보관합니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제5조 (개인정보의 파기절차 및 방법)
						</h2>
						<p className="leading-relaxed">
							회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
							정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제6조 (이용자 및 법정대리인의 권리와 그 행사방법)
						</h2>
						<p className="leading-relaxed">
							이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
							수정할 수 있으며 가입해지를 요청할 수 있습니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제7조 (개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항)
						</h2>
						<p className="leading-relaxed">
							회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을
							운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의
							브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
							하드디스크에 저장됩니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-white mb-4">
							제8조 (개인정보 보호책임자)
						</h2>
						<p className="leading-relaxed">
							회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
							처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호책임자를
							지정하고 있습니다.
						</p>
						<ul className="list-disc pl-5 space-y-2 mt-4 text-slate-400">
							<li>개인정보 보호책임자 : 운영팀</li>
							<li>전화번호 : 02-123-4567</li>
							<li>이메일 : contact@waveon.kr</li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	);
}
