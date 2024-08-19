/**
 * Menyalin teks ke clipboard.
 * @param {string} text - Teks yang akan disalin.
 * @returns {Promise<string>} - Promise yang resolve dengan pesan sukses jika penyalinan berhasil.
 * @throws {Error} - Jika penyalinan gagal.
 */
export const copyToClipboard = async (text: string): Promise<string> => {
	try {
		await navigator.clipboard.writeText(text);
		return 'Text copied to clipboard';
	} catch (err) {
		throw new Error('Failed to copy text: ' + (err instanceof Error ? err.message : String(err)));
	}
};

/**
 * Menyalin nilai dari sebuah elemen input ke clipboard.
 * @param {string} inputSelector - Selector dari elemen input yang nilai-nya akan disalin.
 * @returns {Promise<string>} - Promise yang resolve dengan pesan sukses jika penyalinan berhasil.
 * @throws {Error} - Jika elemen input tidak ditemukan atau penyalinan gagal.
 */
export const copyInputValue = async (inputSelector: string): Promise<string> => {
	const inputElement = document.querySelector<HTMLInputElement>(inputSelector);
	if (inputElement) {
		return copyToClipboard(inputElement.value);
	} else {
		throw new Error('Input element not found');
	}
};

/**
 * Menyalin semua konten teks dari elemen target ke clipboard.
 * @param {string | HTMLElement} element - Selector string atau HTMLElement yang konten teksnya akan disalin.
 * @returns {Promise<string>} - Promise yang resolve dengan pesan sukses jika penyalinan berhasil.
 * @throws {Error} - Jika elemen tidak ditemukan atau penyalinan gagal.
 */
export const copyFromElement = async (element: string | HTMLElement): Promise<string> => {
	let targetElement: HTMLElement | null;

	if (typeof element === 'string') {
		targetElement = document.querySelector<HTMLElement>(element);
	} else {
		targetElement = element;
	}

	if (targetElement) {
		return copyToClipboard(targetElement.textContent || '');
	} else {
		throw new Error('Element not found');
	}
};
