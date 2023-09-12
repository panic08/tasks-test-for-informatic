package by.andrew.informatic.controller;

import by.andrew.informatic.dto.TaskDto;
import by.andrew.informatic.model.Task;
import by.andrew.informatic.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/task")
@RequiredArgsConstructor
public class TaskController {
    private final TaskRepository taskRepository;

    @PostMapping("/create")
    private Mono<Void> create(
            @RequestBody TaskDto taskDto
            ){
        return taskRepository.save(new Task(null, taskDto.getTitle(), taskDto.getMessage()))
                .flatMap(task -> Mono.empty());
    }

    @GetMapping
    private Mono<Task> get(@RequestParam("id") Long id){
        return taskRepository.findById(id);
    }

    @GetMapping("/getAll")
    private Flux<Task> getAll(){
        return taskRepository.findAll();
    }
}
