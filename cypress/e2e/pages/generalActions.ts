class GeneralActions {
    elements= {

    }

    goPage(url){
        cy.visit(url)
    }
}
export default new GeneralActions();