document.addEventListener("DOMContentLoaded", () => {
    const prices = {
        "Full-Service": 220,
        "Self-Service": 220,
        "Drop-Off Service": 255,
        "Delivery Charge": 180,
        "Pickup Charge": 50,
    };

    const updatePrices = () => {
        const rows = document.querySelectorAll("#order-table tbody tr");
        rows.forEach((row) => {
            const serviceName = row.querySelector(".service-name")?.textContent.trim();
            const quantity = row.querySelector("select[name='filter_for']").value;
            const priceCell = row.querySelector(".table-price");

            if (serviceName && prices[serviceName] !== undefined && priceCell) {
                const total = prices[serviceName] * parseInt(quantity, 10);
                priceCell.textContent = `P ${total.toFixed(2)}`;
            }
        });

        const totalPriceElement = document.querySelector(".total-price");
        const total = Array.from(document.querySelectorAll(".table-price"))
            .reduce((sum, cell) => sum + parseFloat(cell.textContent.replace("P ", "")), 0);
        totalPriceElement.textContent = `P ${total.toFixed(2)}`;
    };

    const dropdowns = document.querySelectorAll("select[name='filter_for']");
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("change", updatePrices);
    });

    updatePrices();
});