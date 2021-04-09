import { Request, Response } from "express";

export default class AnswersController {

    exemplo(request: Request, response: Response) {

        const { x,  y} = request.query;

        console.log(x,y);

        response.status(201).json(
            {
                Pergunta: "Quanto é x + y",
                x: x,
                y: y,
                Resposta: Number(x)+Number(y)
            }
        );
    }

    questao1(request: Request, response: Response){
        const { a,  b} = request.query;        

        console.log(a);
        console.log(b);
        var resposta = String(a).endsWith(String(b)) ? 'encaixa' : 'nao encaixa'
        console.log(resposta);

        if(!a||!b){
            response.status(404).json(
                {
                    erro: "parametros não encontrados",
                    A: a ? a : "",
                    B: b ? b : ""
                }
            );
        }
        else{
        response.status(201).json(
            {
                Pergunta: "A termina com B ?",
                LinkURI: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1240",
                A: a,
                B: b,
                Resposta: resposta
            }
        );
        }
    }
}
