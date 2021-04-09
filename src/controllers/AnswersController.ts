import { Request, Response } from "express";

export default class AnswersController {

    exemplo(request: Request, response: Response) {

        const { x, y } = request.query;

        console.log(x, y);

        response.status(201).json(
            {
                Pergunta: "Quanto é x + y",
                x: x,
                y: y,
                Resposta: Number(x) + Number(y)
            }
        );
    }

    questao1(request: Request, response: Response) {
        const { a, b } = request.query;
        if (!a || !b) {
            response.status(404).json(
                {
                    erro: "Parâmetros não encontrados",
                    LinkURI: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1240",
                    InputEsperado_A: "Inteiro",
                    InputEsperado_B: "Inteiro",
                    A: a ? a : "",
                    B: b ? b : ""
                }
            );
        }
        else {
            console.log(a);
            console.log(b);
            var resposta = String(a).endsWith(String(b)) ? 'encaixa' : 'nao encaixa'
            console.log(resposta);
            response.status(201).json(
                {
                    Pergunta: "A termina com B ?",
                    LinkURI: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1240",
                    InputEsperado_A: "Inteiro",
                    InputEsperado_B: "Inteiro",
                    InputRecebido_A: a,
                    InputRecebido_B: b,
                    Resposta: resposta
                }
            );
        }
    }


    questao2(request: Request, response: Response) {
        const { a } = request.query;
        if (!a ) {
            response.status(404).json(
                {
                    erro: "Parâmetros não encontrados",
                    LinkURI: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1170",
                    InputEsperado_A: "Inteiro (Quantidade de comida dos Blobs em kilos)",     
                    A: a ? a : "",
                }
            );
        }
        else {
            console.log(a);
            var A = Number(a);
            var dias = 1;
            var resposta;
            while (true) {
                if (A / 2 <= 1) {
                    resposta=(`${dias} dias`);
                    break;
                } else {
                    dias++;
                    A = A / 2;
                }
            }
            response.status(201).json(
                {
                    Pergunta: "Tempo de vida dos Blobs",
                    LinkURI: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1170",
                    InputEsperado_A: "Inteiro (Quantidade de comida dos Blobs em kilos)",                    
                    InputRecebido_A: a,
                    Resposta: resposta
                }
            );
        }

    }
}
