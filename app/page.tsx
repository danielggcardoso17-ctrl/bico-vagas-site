"use client" // Adicione se for um arquivo separado no Next.js App Router

import React from "react";
import { Search, MapPin, Clock, Star, Map as MapIcon, Bell, Mail, Import } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle"; // Importe o botão de tema
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { JOB_DATA } from "./JobData";

export default function BicoVagas() {
  return (
    // Alterado para bg-background para seguir o tema
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* --- NAVBAR --- */}
      <nav className="bg-card border-b p-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-2xl">Bico</span>
            {/* Adicionado dark:text-blue-400 para melhor contraste no modo escuro */}
            <span className="text-blue-900 dark:text-blue-400 font-bold text-2xl">Vagas</span>
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Pesquise por serviço ou local..." className="pl-10 bg-muted/50 border-none" />
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Button variant="outline" size="icon"><Mail size={20} /></Button>
            <Button variant="outline" size="icon"><MapIcon size={20} /></Button>
            <Button variant="outline" size="icon"><Bell size={20} /></Button>

            {/* BOTAO DE TEMA AQUI */}
            <ModeToggle />

            <div className="flex items-center gap-2 border-l pl-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hidden sm:inline">Daniel G.</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- CATEGORIAS --- */}
      <div className="container mx-auto py-6 px-4 flex gap-2 overflow-x-auto">
        {["Faxina", "Entregas", "Manutenção", "TI", "Eventos"].map((cat) => (
          <Badge key={cat} variant="secondary" className="px-4 py-1 cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">
            {cat}
          </Badge>
        ))}
      </div>

      {/* --- GRID DE VAGAS --- */}
      <main className="container mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-6 italic text-blue-900 dark:text-blue-400">
          Bico Vagas: Encontre Trabalho Rápido
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOB_DATA.map((job) => (
            <Card key={job.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all bg-card">
              <div className="h-32 w-full bg-muted">
                <img src={job.imagem} alt={job.tipo} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sm leading-tight">{job.tipo}</h3>
                  <span className="text-orange-600 dark:text-orange-500 font-bold text-sm">R$ {job.valor.toFixed(2)}</span>
                </div>

                <div className="space-y-1 text-[12px] text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-orange-500" />
                    <span>{job.bairro}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-orange-500" />
                    <span>{job.horario}</span>
                  </div>
                </div>

                <p className="mt-3 text-[12px] text-muted-foreground line-clamp-2 italic">
                  "{job.descricaoCurta}"
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-3 flex justify-between items-center border-t border-muted">
                <div className="flex items-center gap-1 text-[11px] bg-muted px-2 py-1 rounded">
                  <span>User: <span className="text-blue-700 dark:text-blue-400 font-bold">{job.usuario}</span></span>
                  <span className="flex items-center gap-0.5 ml-2">
                    {job.avaliacao} <Star size={10} className="fill-yellow-400 text-yellow-400" />
                  </span>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-8 text-[11px] bg-orange-500 hover:bg-orange-600 text-white">
                      Ver detalhes
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-106.25 bg-card">
                    <DialogHeader>
                      <DialogTitle className="text-orange-600">Detalhes da Vaga</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">{job.tipo}</h2>
                        <span className="text-xl font-bold text-orange-600">R$ {job.valor.toFixed(2)}</span>
                      </div>

                      <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                        <Avatar>
                          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" />
                          <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-bold">Cliente: {job.usuario} Silva</p>
                          <p className="text-xs text-yellow-600 flex items-center gap-1">
                            4.9 <Star size={10} className="fill-yellow-600" /> (12 avaliações)
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">📍 Localização:</strong> {job.bairro}</p>
                        <p><strong className="text-foreground">⏰ Horário:</strong> {job.horario}</p>
                        <p className="pt-2 leading-relaxed">
                          <strong className="text-foreground">Descrição Completa:</strong><br />
                          {job.descricaoLonga}
                        </p>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">Quero esse Bico</Button>
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