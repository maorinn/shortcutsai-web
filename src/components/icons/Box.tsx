import { cn } from "@/utils";

export default function Box({ className }: { className?: string }) {
	return (
		<svg
			width="160"
			height="auto"
			viewBox="0 0 496 188"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(className)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M492.647 85.9774C493.647 51.3345 494.004 44.8345 494.862 40.1917C495.576 36.2631 494.004 32.1203 491.219 30.8345C486.862 28.7631 487.933 30.6203 486.576 60.9774C486.219 68.9774 486.362 85.6917 486.004 92.906C485.862 95.1203 481.576 96.1203 481.719 92.406L482.29 24.2631L485.504 23.7631C489.219 23.1917 489.719 21.8345 487.076 18.8345C485.004 16.4774 482.362 15.906 468.362 14.906C289.29 2.62026 289.933 1.33454 170.147 0.905971C132.219 0.763114 100.862 0.763114 100.504 0.905971C98.7902 1.54883 49.8613 1.19169 8.93271 3.90598C2.43269 4.33455 1.86126 4.90598 4.64697 8.12026C7.43271 11.3345 13.4329 11.6917 54.0757 10.6917C127.647 8.97741 292.29 10.406 292.29 12.7631C292.29 13.406 276.076 13.6917 251.219 13.4774C180.219 12.8345 81.6473 17.2631 18.7186 23.8345C-0.352894 25.8345 -0.495779 25.906 0.647079 29.3346C2.43279 34.5488 2.50425 63.7631 3.36139 73.406C3.57568 75.5488 7.29 161.406 7.29 163.763C7.29 169.763 8.00414 173.62 9.28986 174.62C10.7184 175.692 14.147 175.835 14.5041 174.763C14.647 174.263 15.3613 174.263 16.7899 174.763C20.7899 176.263 44.2899 177.049 71.1473 176.62C85.6473 176.335 107.362 176.477 119.362 176.906C146.147 177.763 243.004 179.692 284.004 181.62C296.147 182.192 373.362 185.406 391.504 186.335C417.433 187.62 473.219 187.549 474.076 186.192C476.29 182.549 467.504 179.192 455.719 179.12C446.004 179.12 445.719 174.335 456.933 173.906C457.719 173.906 463.79 173.62 482.433 174.406C482.433 174.406 482.433 176.406 481.933 180.477C481.433 184.692 485.933 191.12 488.147 180.263C488.29 179.406 488.933 174.263 488.933 174.263C488.933 174.263 492.576 173.906 493.147 173.692C495.219 172.906 495.647 170.263 493.719 167.763C493.076 166.977 490.29 166.12 490.29 166.12C490.29 166.12 490.933 144.406 492.647 85.9774ZM476.647 42.4774C476.219 49.4774 471.362 151.549 471.076 155.763C470.647 162.977 470.504 163.477 469.147 163.477C463.219 163.477 424.433 157.835 323.362 160.62C310.362 160.977 16.3614 165.977 16.3614 165.977C15.4328 165.977 14.7185 165.263 14.7185 164.406C13.7185 140.406 12.8613 134.692 12.8613 125.263C12.8613 124.406 13.5042 123.763 14.3614 123.763C15.1471 123.763 15.8613 124.406 15.9327 125.192C17.8613 161.549 17.2185 162.763 21.7185 162.763C22.8614 162.763 23.7186 161.835 23.7186 160.692C23.7186 153.62 23.1471 144.406 22.6471 137.406C20.0757 98.6203 19.5756 70.5488 15.6471 31.5488C26.2185 31.2631 44.5757 30.906 55.1471 29.6203C93.6473 25.0488 190.79 24.3346 191.433 23.6917C192.219 22.9774 271.362 23.5488 302.719 24.4774C322.29 25.0488 444.147 28.6203 455.719 28.8345C480.719 29.2631 477.504 27.1203 476.647 42.4774Z"
				fill="#7B39ED"
			/>
		</svg>
	);
}
