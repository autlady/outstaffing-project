    /* =============== modal с атрибутом frame-modal ===============*/
	const modalFramesOpen = document.querySelectorAll('[data-modal-button]');
	const modalFrames = document.querySelectorAll('[data-modal]');

	if (modalFrames.length > 0) {
		const modalFramesClose = document.querySelectorAll('[data-modal-close]');

		for (let item of modalFramesOpen) {
			item.addEventListener('click', function (e) {
				for (let item of modalFrames) {
					item.classList.add('hidden');
					bodyEl.classList.remove('noscroll');
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('data-modal-button');

				for (let frame of modalFrames) {
					const frameAttr = frame.getAttribute('data-modal');
					if (frameAttr == itemAttr) {
						frame.classList.remove('hidden');
						bodyEl.classList.add('noscroll');

					}
				}
			});
		}
		/*==  закрыть модалки  frame-modal по клику на крестик ======*/
		for (let item of modalFramesClose) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				item.closest('[data-modal]').classList.add('hidden');
				bodyEl.classList.remove('noscroll');


			});
		}

		/*=============== закрыть модалки по клику вне ===============*/
		for (let frame of modalFrames) {
			const frameWin = frame.querySelector('.modal-window');
			frameWin.addEventListener('click', function (e) {
				if (e.target === e.currentTarget) {
					e.preventDefault();
					frame.classList.add('hidden');
					bodyEl.classList.remove('noscroll');
				}
			});
		}
	}


