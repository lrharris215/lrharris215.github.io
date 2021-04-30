let clipboard = new ClipboardJS('.clipboard');
clipboard.on('success', function (e) {
    let email = document.getElementById('email');
    let tooltip = document.createElement('div');
    let arrow = document.createElement('div');
    arrow.className = 'tooltip-arrow';
    tooltip.className = 'tooltip';
    tooltip.innerHTML = 'Copied to Clipboard!';
    tooltip.append(arrow);
    email.append(tooltip);

    setTimeout(() => {
        email.removeChild(tooltip);
    }, 1500);
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});
