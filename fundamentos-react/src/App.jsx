import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOrImpar from './components/condicional/ParOuImpar'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default _ =>
    <div className="App">
        <h1>Fundamentos React Arrow Function</h1>

        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={6}/>
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>
            <Card titulo="#9 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>
            <Card titulo="#8 - Renderização Condicional" color="#982395">
                <ParOrImpar numero={20}/>
                <UsuarioInfo usuario={{nome: 'Ricardo'}} />
                <UsuarioInfo usuario={{email: 'Ricardo@2006'}} />
            </Card>
            <Card titulo="#7 - Desafio Repetição" color="#3A9AD9">
                <ListaProdutos />
            </Card>

            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListaAlunos  />
            </Card>

            <Card titulo="#5 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Marinho">
                    <FamiliaMembro nome="Ricardo" />
                    <FamiliaMembro nome="Gleice" />
                    <FamiliaMembro nome="Junior" />
                </Familia>
            </Card>

            <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
                <ComParametro titulo="Situação do aluno"
                    subtitulo="Luiz Ricardo"
                    nota={10.0} />
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
