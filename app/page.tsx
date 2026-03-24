import React from "react";
import { Search, MapPin, Clock, Star, Map as MapIcon, Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// 1. Dados mais completos baseados na sua imagem
const JOB_DATA = [
  {
    id: 1,
    tipo: "Faxina Residencial",
    valor: 150.0,
    bairro: "Marco, Belém, PA",
    distancia: "2km de você",
    horario: "Hoje às 14h",
    descricaoCurta: "Limpeza de apartamento 2 quartos. Material incluso.",
    descricaoLonga: "Limpeza geral de apartamento de 2 quartos, sala, cozinha e banheiro. Requer organização básica e limpeza de pisos e móveis.",
    usuario: "Maria",
    avaliacao: 4.8,
    imagem: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=300&h=150&auto=format&fit=crop"
  },
  // Adicione mais itens aqui se desejar
];

export default function BicoVagas() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- NAVBAR --- */}
      <nav className="bg-white border-b p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-2xl">Bico</span>
            <span className="text-blue-900 font-bold text-2xl">Vagas</span>
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Pesquise por serviço ou local..." className="pl-10" />
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <Button variant="ghost" size="icon"><MapIcon size={20} /></Button>
            <Button variant="ghost" size="icon"><Mail size={20} /></Button>
            <Button variant="ghost" size="icon"><Bell size={20} /></Button>
            <div className="flex items-center gap-2 border-l pl-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Daniel G.</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- CATEGORIAS --- */}
      <div className="container mx-auto py-6 px-4 flex gap-2 overflow-x-auto">
        {["Faxina", "Entregas", "Manutenção", "TI", "Eventos"].map((cat) => (
          <Badge key={cat} variant="secondary" className="px-4 py-1 cursor-pointer hover:bg-orange-100 transition-colors">
            {cat}
          </Badge>
        ))}
      </div>

      {/* --- GRID DE VAGAS --- */}
      <main className="container mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-6 italic text-blue-900">Bico Vagas: Encontre Trabalho Rápido</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOB_DATA.map((job) => (
            <Card key={job.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              {/* Imagem do Card */}
              <div className="h-32 w-full bg-gray-200">
                <img src={job.imagem} alt={job.tipo} className="w-full h-full object-cover" />
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sm leading-tight">{job.tipo}</h3>
                  <span className="text-orange-600 font-bold text-sm">R$ {job.valor.toFixed(2)}</span>
                </div>

                <div className="space-y-1 text-[12px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-orange-500" />
                    <span>{job.bairro}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3" /> {/* Espaçador para alinhar */}
                    <span>{job.distancia}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-orange-500" />
                    <span>{job.horario}</span>
                  </div>
                </div>

                <p className="mt-3 text-[12px] text-gray-600 line-clamp-2 italic">
                  "{job.descricaoCurta}"
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center gap-1 text-[11px] bg-blue-50 px-2 py-1 rounded">
                  <span>User: <span className="text-blue-700 font-bold">{job.usuario}</span></span>
                  <span className="flex items-center gap-0.5 ml-2">Avaliação: {job.avaliacao} <Star size={10} className="fill-yellow-400 text-yellow-400" /></span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-8 text-[11px] bg-orange-500 hover:bg-orange-600">Ver detalhes</Button>
                  </DialogTrigger>

                  {/* Conteúdo do Modal inspirado na lateral da sua foto */}
                  <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                      <DialogTitle className="text-orange-600">Detalhes da Vaga</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">{job.tipo}</h2>
                        <span className="text-xl font-bold text-orange-600">R$ {job.valor.toFixed(2)}</span>
                      </div>

                      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <Avatar>
                          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" />
                          <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-bold">Cliente: {job.usuario} Silva</p>
                          <p className="text-xs text-yellow-600 flex items-center gap-1">4.9 <Star size={10} className="fill-yellow-600" /> (12 avaliações)</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <p><strong>📍 Localização:</strong> {job.bairro}</p>
                        <p><strong>⏰ Horário:</strong> {job.horario}</p>
                        <p className="pt-2 text-gray-700 leading-relaxed">
                          <strong>Descrição Completa:</strong><br />
                          {job.descricaoLonga}
                        </p>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">Tenho Interesse</Button>
                        <Button variant="outline" className="flex-1">Compartilhar</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}