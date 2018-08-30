






function readUrl(event) {
    if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (event) => {
            $("#image").attr('src',event.target.result)
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}