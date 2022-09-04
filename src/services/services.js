class Finance{
    getActiveClassMinus = () => {
        document.querySelector(".categories.minus").classList.toggle("show");
        document.querySelector(".score-form.minus").classList.toggle("show");

        if (document.querySelector(".categories.plus").classList.contains('show')) {
            document.querySelector(".categories.plus").classList.remove('show');
            document.querySelector(".score-form.plus").classList.remove('show');
        }
    }

    getActiveClassPlus = () => {
        document.querySelector(".categories.plus").classList.toggle("show");
        document.querySelector(".score-form.plus").classList.toggle("show");

        if (document.querySelector(".categories.minus").classList.contains('show')) {
            document.querySelector(".categories.minus").classList.remove('show');
            document.querySelector(".score-form.minus").classList.remove('show');
        }
    }
}
export default Finance;